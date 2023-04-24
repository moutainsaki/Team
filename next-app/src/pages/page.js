import styles from "../styles/page.module.css"

export default function page() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>登録完了</h1>
        <hr className="hr"></hr>
        <main>
          <p className={styles.question}>安全な場所に避難して周囲の安全を確保してください。</p>
          <a href="example.js" className={styles.companybtn}>社員の状況一覧</a><br></br>
          <a href="example.js" className={styles.managementbtn}>管理</a><br></br>
          <a href="example.js" className={styles.logoutbtn}>ログアウト</a><br></br>
          <hr className="hr2"></hr>
        </main>
    </div>
  );
}