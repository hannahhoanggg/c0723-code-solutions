export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());

    console.log(formEntries);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username <input name="userName" />
        </label>
        <label>
          Password <input type="password" name="passWord" />
        </label>
        <label>
          <button type="submit">Sign up</button>
        </label>
      </form>
    </>
  );
}
