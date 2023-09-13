import { Twilio } from "twilio";

const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const sendMessage = (tokenPayload: string) => {
  const message = twilioClient.messages.create({
    messagingServiceSid: process.env.TWILIO_MSID,
    // to: userPayload (twilio trial issue)
    to: process.env.PHONE_NUMBER!,
    body: `[멜론마켓 본인확인] 인증번호 ${tokenPayload}를 입력해주세요.`
  });
  console.log(message);
};

export default sendMessage;