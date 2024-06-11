export interface OneNotificationParams{
    userId:string,
    message: {
        en: string
        'zh-Hant'?:string
    }
    name?: string
    path?: string
}
export const sendOneNotification = async ({ userId, message, name, path }:OneNotificationParams) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: `Basic ${process.env.ONESIGNAL_REST_KEY}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      target_channel: 'push',
      app_id: process.env.ONESIGNAL_APP_ID,
      include_aliases: {
        external_id: [userId]
      },
      contents: message,
      name,
      url: 'onlyface://' + path
    })
  }
  fetch('https://onesignal.com/api/v1/notifications', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}
