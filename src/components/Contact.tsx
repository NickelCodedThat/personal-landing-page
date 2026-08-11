function Contact() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')

    const subject = encodeURIComponent(`Portfolio contact from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:nickboyce.tech@icloud.com?subject=${subject}&body=${body}`
  }

  return (
    <section
      className="contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__panel">
          <div className="contact__content">
            <p className="section-heading__eyebrow">Contact</p>

            <h2 className="contact__title" id="contact-title">
              Let&apos;s build something worth shipping.
            </h2>

            <p className="contact__description">
              I&apos;m open to development opportunities, freelance projects,
              and conversations about useful digital products.
            </p>
            <p className="contact__note">
              Use the form to prepare an email, or contact me directly below.
            </p>

            <div className="contact__details">
              <div>
                <p className="contact__label">Email</p>
                <a
                  className="contact__link"
                  href="mailto:nickboyce.tech@icloud.com"
                >
                  nickboyce.tech@icloud.com
                </a>
              </div>
              <div>
                <p className="contact__label">Phone</p>
                <a className="contact__link" href="tel:+13322811444">
                  (332) 281-1444
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell me about your project or opportunity..."
                required
              ></textarea>
            </div>

            <div className="contact-form__footer">
              <button
                className="button button--primary contact-form__submit"
                type="submit"
                aria-describedby="contact-form-note"
              >
                Draft Email
              </button>
              <p className="contact-form__note" id="contact-form-note">
                Opens your default email app. Nothing is sent automatically.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
