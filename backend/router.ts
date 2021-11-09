import { Router } from "express";
import webPush from "./webpush";

const router = Router();
const subscriptions: { [key: string]: any } = {};

router.post("/subscription", async (request, response) => {
  try {
    if (!request.body?.subscription?.keys?.p256dh || !request.body?.form) throw "";

    const p256dh: string = request.body.subscription.keys.p256dh.replace(/[^a-z0-9]/gi, "");
    subscriptions[p256dh] = request.body.subscription;

    const subscriptionsPromises: Promise<any>[] = [];
    for (const subscriptionKey in subscriptions) {
      const subscription = subscriptions[subscriptionKey];

      subscriptionsPromises.push(webPush.sendNotification(subscription, JSON.stringify(request.body.form)));
    }

    await Promise.allSettled(subscriptionsPromises);
  } catch (error) {
    console.error(error);
    return response.status(400).json({ error: "Deu ruim" });
  }

  return response.status(200).json();
});

export default router;
