self.addEventListener("push", (event) => {
  const notification = event.data.json();
  self.registration.showNotification(notification.title, { icon: notification.icon, body: notification.message });
});
