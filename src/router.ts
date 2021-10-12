import { Router } from "express";
import webPush from "./webpush";

const router = Router();
router.post("/subscription", async (request, response) => {
  const subscription = request.body;
  const payload = {
    title: "Teste titulo",
    message: "Teste mensagem",
  };

  try {
    await webPush.sendNotification(subscription, JSON.stringify(payload));
  } catch (error) {
    console.error(error);
  }

  return response.status(200).json();
});

export default router;
