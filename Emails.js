import Email from './Email'

function Emails(props) {
  console.log('Inside Emails: ', props.emails)

  return (
    <main className="emails">
      <ul>
        {props.emails.map((email, index) => (
          <Email />
        ))}
      </ul>
    </main>
  )
}

export default Emails
