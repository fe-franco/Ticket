var mimeTypes = require("mimetypes");
const { Storage } = require("@google-cloud/storage");
const path = require("path");
const uuidv4 = require("uuid/v4");
const { PDFDocument } = require("pdf-lib");
const storage = new Storage({
  keyFilename: path.join(__dirname, "../../google-bucket.json"),
  projectId: "solort",
});
exports.uploadPdf = async (pdf = "") => {
  try {
    var image = pdf,
      mimeType = image.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/)[1],
      fileName = uuidv4() + mimeTypes.detectExtension(mimeType),
      base64EncodedImageString = image.replace(
        /^data:application\/\w+;base64,/,
        ""
      ),
      imageBuffer = new Buffer(base64EncodedImageString, "base64");

    // Instantiate the GCP Storage instance

    var bucket = storage.bucket("solort-bucket");

    // Upload the image to the bucket
    var file = bucket.file(fileName);

    let error = await file.save(imageBuffer, {
      metadata: { contentType: mimeType },

      validation: "md5",
    });

    if (error) {
      console.log(error);

      return null;
    } else {
      return fileName;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

exports.getPdf = async (imgId,jornadaPdfDatos, res) => {
  try {
    var bucket = storage.bucket("solort-bucket");
    console.log(imgId);
    if (!imgId || imgId == undefined || typeof imgId == undefined) {
      console.log("EAIGMEAKGMAEKIM");
      return res.send({ status: "Error" });
    }
    let file = bucket.file(imgId);

    //let readStream = file.createReadStream();
    file.download().then(async function (data) {
      const file = data[0];
      const pdfDoc = await PDFDocument.load(file);
      const form = pdfDoc.getForm();

      for (const k in jornadaPdfDatos) {
        if (Object.hasOwnProperty.call(jornadaPdfDatos, k)) {
          const v = jornadaPdfDatos[k].toString();
          console.log(k, v);
      form.getTextField(k).setText(v);
          
        }
      }
     // form.getTextField("dia").setText(days);
     // form.getTextField("jornada").setText(title);
    //  form.getTextField("articulacao").setText(articulacao);
      const pdfBytes = await pdfDoc.save();
      res.setHeader("content-type", "application/pdf");
      res.header("X-Frame-Options", "ALLOWALL")

      var pdfBuffer = Buffer.from(pdfBytes.buffer, "binary");
      res.type("pdf");
      res.send(pdfBuffer);
    });
    // res.setHeader("content-type", "application/pdf");
    // readStream.pipe(res);
  } catch (error) {
    return res.send({ status: "Error",error });
    return error;
  }
};


exports.getPdfExamenes = async ( listaExamenetes, datos,res) => {
  try {
    var bucket = storage.bucket("solort-bucket");
  
    let file = bucket.file("SADT.pdf");

    //let readStream = file.createReadStream();
    file.download().then(async function (data) {
      const file = data[0];
      const pdfDoc = await PDFDocument.load(file);
      const form = pdfDoc.getForm();
let objTEmp ={
  pacienteName:datos.pacienteName,
  medicoName:datos.medicoName,
"20 Assinatura do Profissional Solicitante":datos.medicoName
}
for (let i = 0; i < listaExamenetes.length; i++) {
  const ex = listaExamenetes[i];
  form.getTextField("exame"+(i+1)).setText(ex.exame.label);
  console.log(ex)
}
      for (const k in objTEmp) {
        if (Object.hasOwnProperty.call(objTEmp, k)) {
          const v = objTEmp[k].toString();
          console.log(k, v);
      form.getTextField(k).setText(v);
          
        }
      }
     // form.getTextField("dia").setText(days);
     // form.getTextField("jornada").setText(title);
    //  form.getTextField("articulacao").setText(articulacao);
      const pdfBytes = await pdfDoc.save();
      res.setHeader("content-type", "application/pdf");
      res.header("X-Frame-Options", "ALLOWALL")

      var pdfBuffer = Buffer.from(pdfBytes.buffer, "binary");
      res.type("pdf");
      res.send(pdfBuffer);
    });
    // res.setHeader("content-type", "application/pdf");
    // readStream.pipe(res);
  } catch (error) {
    return res.send({ status: "Error",error });
    return error;
  }
};


function bufferToStream(buffer) {
  let stream = new Duplex();
  stream.push(buffer);
  stream.push(null);
  return stream;
}
