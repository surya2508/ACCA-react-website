function CallbackForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
    event.currentTarget.reset();
  }

  return (
    <form className="callback-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <h2>Aspiring to be an ACCA?</h2>
        <p>Get in touch and we’ll help you plan your next step.</p>
      </div>
      <div className="form-fields">
        <input
          aria-label="Full name"
          autoComplete="name"
          name="name"
          placeholder="Full Name"
        />
        <input
          aria-label="Phone number or email"
          autoComplete="tel"
          name="contact"
          placeholder="Phone Number or Email"
        />
        <select
          aria-label="Current qualification"
          defaultValue=""
          name="qualification"
        >
          <option disabled value="">
            Current Qualification
          </option>
          <option>Class 12 / Higher Secondary</option>
          <option>Undergraduate student</option>
          <option>Graduate</option>
          <option>Working professional</option>
        </select>
        <select aria-label="Study interest" defaultValue="" name="interest">
          <option disabled value="">
            Interested in
          </option>
          <option>Starting ACCA</option>
          <option>ACCA exam preparation</option>
          <option>Eligibility and exemptions</option>
          <option>Career support</option>
        </select>
        <button className="button form-submit" type="submit">
          Request Call Back
        </button>
      </div>
    </form>
  );
}

export default CallbackForm;
