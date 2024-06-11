interface IEmailNotification {
  userId: string[],
  subject: string,
  emailBody: {
    head: string,
    message: string
  }
}

export const emailNotification = ({ userId, subject, emailBody: { head, message } }: IEmailNotification) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      Authorization: `Basic ${process.env.ONESIGNAL_REST_KEY}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      target_channel: 'email',
      include_aliases: {
        external_id: userId
      },
      email_subject: subject,
      name: subject,
      email_body: `<html><head>${head}</head><body><p>${message}</p></body></html>`,
      app_id: process.env.ONESIGNAL_APP_ID
    })
  }

  return fetch('https://onesignal.com/api/v1/notifications', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err))
}

export const sendEmailOTP = ({ userId, userName, otp }: {userId:string[], userName: string, otp: string}) => {
  const subject = 'Onlyface Email verification'
  const head = `Welcome to Onlyface, ${userName}`
  const message = `Your email otp is ${otp}`

  emailNotification({ userId, subject, emailBody: { head, message } })
}

export const sendResetPasswordOTP = ({ userId, userName, otp }: {userId: string[], userName: string, otp: string}) => {
  const subject = 'Onlyface reset password'
  const head = `Welcome to Onlyface, ${userName}.<br> You're trying to reset your password!`
  const message = `Your reset password otp is ${otp}`

  emailNotification({ userId, subject, emailBody: { head, message } })
}
