import React from "react"

export const Footer = () => (
  <div className="flex">
    <form action="https://www.paypal.com/donate" method="post" target="_top">
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
    </form>
    <div>
      <a href="https://itaycode.com" target="_blank" rel="noopener noreferrer">
        ItayCode
      </a>
    </div>
  </div>
)
