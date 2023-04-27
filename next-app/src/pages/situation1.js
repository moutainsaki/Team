import style from "../styles/situation.module.css"
const situation1 = () => {
    return (
        <div className={style.container}>
            <div>
                <h1 className={style.title}>安否登録</h1>
                <p className={style.text}>あなたの安否状況を教えてください。</p>
            </div>

            <form action="" method="post">
                    <div>
                        <input className={style.safe} type="button" value="無事です" onClick="../pages/situation3.js"></input>
                    </div>
                    <div>
                        <input className={style.dangerous} type="button" value="被害あり" onClick="../pages/situation3.js"></input>
                    </div>
            </form>

            <div className={style.img}>
                <a href="../pages/page.js"><img src="../img/Left.png" width="100px"></img></a>
                <h3>システムの状況</h3>
                <a href="../pages/situation2.js"><img src="../img/Right.png" width="100px"></img></a>
            </div>
            <hr className={style.hr}></hr>
        </div>
    );
}

export default situation1;