const PUBLIC_WEB_PUSH = "BC8gPePaG-zjIkRM6lbFiipnU5dmrl8uwl1UyTPFUUyXQa7xiB-nxc1e8ivXlyIw_7asJfEXEWgcI_yVeNUGjYw";
const payload = { subscription: null, form: null };

async function handleSubmit(event) {
  event.preventDefault();
  const formEl = document.forms.namedItem("pushNotificationForm");
  const formFields = formEl.elements;

  payload.form = {
    title: formFields.namedItem("title").value,
    icon: formFields.namedItem("icon").value,
    message: formFields.namedItem("message").value,
  };

  sendNotification();
}

async function sendNotification() {
  if (Notification.permission !== "granted") {
    alert("Você precisa aceitar receber notificações!");
    return;
  }

  await fetch("/subscription", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}

async function subscription() {
  if (Notification.permission === "denied") return;

  const serviceWork = await navigator.serviceWorker.register("/servicework.js", { scope: "/" });

  payload.subscription = await serviceWork.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: PUBLIC_WEB_PUSH,
  });
}

subscription();
