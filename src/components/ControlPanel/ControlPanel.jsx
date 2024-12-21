import "./ControlPanel.css"

export default function ControlPanel() {



  return (
    <>
      <section className="WrapperControlPanel">
        <div className="ControlPanel">
          <div className="BetAndWithdrawInput">
            <input
             type="number"
              id="bet"
              name="bet"
              min="10"
              className="MainBetAndWithdrawInput"
            />
            <div className="PlusMinusBtn">
              <button className="Minus">/2</button>
              <button className="Plus">×2</button>
            </div>
          </div>
          <button className="GreenButton">
            Withdraw
          </button>
        </div>
      </section>

      <section className="WrapperSelectBombCount">
         <div className="SelectBombCount">
            <div className="Title">
              Number of bombs
            </div>
            <div className="WrapperBombBtn">
              <span className="BombBtns">
                <button className="SelectBombCountBtn">2</button>
                <span className="VerticalLine"> </span>
                <button className="SelectBombCountBtn">3</button>
                <span className="VerticalLine"> </span>
                <button className="SelectBombCountBtn">5</button>
                <span className="VerticalLine"> </span>
                <button className="SelectBombCountBtn">7</button>
              </span>
            </div>
         </div>
      </section>
    </>
  )
}