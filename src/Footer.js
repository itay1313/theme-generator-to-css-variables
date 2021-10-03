import React from "react"

export const Footer = () => (
  <div className="flex">
    {/* <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value="C6RLZBNKWLP7E" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        border="0"
        src="https://www.paypal.com/en_IL/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form> */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size="large"
        data-text="Hey Checkout this cool theme palette generator to CSS Variables app"
        data-url="http://com-mando.me/"
        data-via="itaycode"
        data-related="itaycode"
        data-show-count="false"
      >
        Tweet
      </a>
      <a rel="noopener noreferrer" href="https://itaycode.com" target="_blank">
        itaycode
      </a>
      <a rel="noopener noreferrer" href="https://com-mando.com" target="_blank">
        com-mando
      </a>
    </div>
  </div>
)
