export async function GET() {
    try {


        return Response.json({ message: "Hello, world!" });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}