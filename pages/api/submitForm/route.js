import { NextResponse } from "next/server";

export default async function POST(req) {
  console.log(req)
  const { fullname, email } = await req.json();

  console.log("log inside API");
  console.log("Full Name", fullname);
  console.log("Email", email);
  
  return NextResponse.json({
    msg: "hi from contact route",
  });
}
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({
  //     msg: ["hi from contact route"],
  //   }),
  // };
// }
