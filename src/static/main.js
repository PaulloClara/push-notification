const PUBLIC_WEB_PUSH = "BC8gPePaG-zjIkRM6lbFiipnU5dmrl8uwl1UyTPFUUyXQa7xiB-nxc1e8ivXlyIw_7asJfEXEWgcI_yVeNUGjYw";

async function subscription() {
  const serviceWork = await navigator.serviceWorker.register("/servicework.js", { scope: "/" });

  const subscription = await serviceWork.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_WEB_PUSH,
  });

  await fetch("/subscription", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(subscription),
  });
}

if (Notification.permission !== "denied") subscription();
