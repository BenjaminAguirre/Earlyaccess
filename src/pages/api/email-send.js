import { client } from "../../../postmark";

export default async function post(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    client.sendEmailWithTemplate({
      TemplateId: "37243311",
      From: "no-reply@ongrid.run",
      To: email,
      TemplateModel: {
        product_name: "Grid early access",
        name: "Grid", // Puedes personalizar esto si tienes el nombre del usuario
        company_name: "",
        company_address: "",
      },
    });
    // Encodificar el req.body como cadena JSON y luego en URI

    res.send(200);
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
