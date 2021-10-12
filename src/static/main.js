const PUBLIC_WEB_PUSH = "BC8gPePaG-zjIkRM6lbFiipnU5dmrl8uwl1UyTPFUUyXQa7xiB-nxc1e8ivXlyIw_7asJfEXEWgcI_yVeNUGjYw";

async function handleSubmit(event) {
  event.preventDefault();
  const formEl = document.forms.namedItem("pushNotificationForm");
  const formFields = formEl.elements;

  const form = {
    title: formFields.namedItem("title").value,
    icon: formFields.namedItem("icon").value,
    message: formFields.namedItem("message").value,
  };

  console.debug(form);
}

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
