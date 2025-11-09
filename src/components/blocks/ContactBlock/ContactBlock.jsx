/* eslint-disable @next/next/no-img-element */

const ContactBlock = ({ contacts, requests }) => {
  return (
    <div className="contact-block">
      <div className="contact-block-subheader">How to contact :</div>
      <div className="contact-block-cards">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-block-card">
            <img
              className="contact-card-image"
              src={contact.icon?.data?.attributes?.url}
              alt=""
            />
            <div className="contact-block-header">{contact.title}</div>
            <div className="contact-card-content">
              <div className="contact-card-content-item">
                <img
                  src={"/assets/blocks/contact-block/calendar.svg"}
                  alt=""
                  className="contact-card-details-icon"
                />
                <div>{contact.days}</div>
              </div>
              <div className="contact-card-content-item">
                <img
                  src={"/assets/blocks/contact-block/mail.svg"}
                  alt=""
                  className="contact-card-details-icon"
                />
                <div>{contact.email}</div>
              </div>
              <div className="contact-card-content-item">
                <img
                  src={"/assets/blocks/contact-block/clock.svg"}
                  alt=""
                  className="contact-card-details-icon"
                />
                <div>{contact.hours}</div>
              </div>
              <div className="contact-card-content-item">
                <img
                  src={"/assets/blocks/contact-block/phone.svg"}
                  alt=""
                  className="contact-card-details-icon"
                />
                <div>
                  {contact.phone1 && <div>{contact.phone1}</div>}
                  {contact.phone2 && <div>{contact.phone2}</div>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {requests?.length > 0 && (
        <div className="contact-block-requests">
          <div className="contact-block-header">For requests regarding:</div>
          <div className="contact-requests-wrapper">
            {requests.map((request, index) => (
              <div key={index} className="contact-requests-item">
                <img
                  className="contact-requests-icon"
                  src={request.icon?.data?.attributes?.url}
                  alt={request.title}
                />
                <div>{request.title}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactBlock;
