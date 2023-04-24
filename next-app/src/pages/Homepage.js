export default function homepage() {
  return (
    <>
      <form action="/api/form" method="post">
        <label htmlFor="staffid">社員のID:</label>
        <input type="text" id="staffid" name="staffid" required />

        <label htmlFor="password">暗証番号:</label>
        <input type="text" id="password" name="password" required />

        <button type="submit" className="LoginSub">
          登録
        </button>
      </form>
    </>
  );
}
