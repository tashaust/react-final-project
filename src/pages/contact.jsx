import React from 'react';

const Contact = ({ setIsModalOpen }) => {

    return (
      <div className="modal">
        <button className="modal__exit" onClick={() => setIsModalOpen(false)}>X</button>
        <div className="modal__half modal__join">
          <h3 className="modal__title modal__title--about">
            Want to join the <b className="teal">community</b>?
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about"></h4>
          <p className="modal__para">
Whether you're a seasoned reader or just starting your literary journey, our community welcomes everyone. Join us to share your thoughts, discover new books, and connect with fellow book enthusiasts.
            <br />
            <br />
Our members enjoy exclusive access to book discussions, author interviews, and special events. Don't miss out on the opportunity to be part of a vibrant and supportive community that celebrates the love of reading.
          </p>
        </div>
        <div className="modal__half modal__contact">
          <h3 className="modal__title modal__title--contact">Ready? Set? Read!</h3>
          <h4 className="modal__sub-title modal__sub-title--contact teal">
            Fill out the form below and we'll be in touch as soon as possible.
          </h4>
          <form id="contact__form">
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input className="input" name="user_name" type="text" />
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input className="input" name="user_email" type="email" />
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="input"
                name="message"
                type="text"
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Submit
            </button>
          </form>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to reading with you soon.
          </div>
        </div>
      </div>
    );
};

export default Contact;