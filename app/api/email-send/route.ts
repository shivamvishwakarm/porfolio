// import { EmailTemplate } from '@/components/email-template';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY) || "";

export async function POST() {
    return Response.json({ message: 'Hello World' });
    // try {
    //     const { data, error } = await resend.emails.send({
    //         from: 'test <vishwakarmashivam2003@gmail.com>',
    //         to: ['vishwakarmashivam2003@gmail.com'],
    //         subject: 'Hello world',
    //         react: await EmailTemplate({ firstName: 'John' }),
    //     });

    //     if (error) {
    //         return Response.json({ error }, { status: 500 });
    //     }

    //     return Response.json(data);
    // } catch (error) {
    //     return Response.json({ error }, { status: 500 });
    // }
}