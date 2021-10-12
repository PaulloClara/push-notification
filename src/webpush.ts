import webPush from "web-push";

webPush.setVapidDetails(
  "mailto:test@gmail.com",
  String(process.env.PUBLIC_WEB_PUSH),
  String(process.env.PRIVATE_WEB_PUSH)
);

export default webPush;
