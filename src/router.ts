import { Router } from "express";
import webPush from "./webpush";

const router = Router();

router.post("/subscription", async (request, response) => {
  try {
    const { subscription, form } = request.body;

    await webPush.sendNotification(subscription, JSON.stringify(form));
  } catch (error) {
    console.error(error);
  }

  return response.status(200).json();
});

export default router;
