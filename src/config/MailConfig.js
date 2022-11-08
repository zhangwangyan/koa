const nodemailer = require("nodemailer");


async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 587,
        secure: false,
        auth: {
            user: 'zhangwangyan.com1',
            pass: 'qybgdtrqjouvcicb'
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <zhangwangyan.com1@qq.com>', // sender address
        to: "3360592283@qq.com",
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
