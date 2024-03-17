export async function GET() {
    return Response.json({message:"Hello from get request"})
}

export async function POST(req) {
    const body = await req.json();
    console.log(body);
    return Response.json({message:"Hello from post request", value:body.message})
}