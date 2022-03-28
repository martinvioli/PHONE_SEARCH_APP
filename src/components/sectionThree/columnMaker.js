export default function TableCreator(phone, id, action) {
  return (
    <div id="container">
      <h2>
        {phone.brand} <span>{phone.phone_name}</span>{" "}
        <span id="remover" onClick={() => action(id)}>
          ❌
        </span>
      </h2>
      {Object.keys(phone).map((e) => {
        if (Array.isArray(phone[e]) === true) {
          return phone[e].map((a) =>
            typeof a === "object"
              ? a.specs.map((b) => {
                  return (
                    <>
                      <span className="key">{b.key}</span>
                      <span className="value">{b.val}</span>
                    </>
                  );
                })
              : null
          );
        } else {
          if (e === "thumbnail") {
            return (
              <img className="phoneCompImg" src={phone[e]} alt="Phone IMG" />
            );
          }
          if (e === "brand" || e === "phone_name") {
            return null;
          }
          if (e.length === 2) {
            return (
              <>
                <span className="key">{e.toUpperCase()}</span>
                <span className="value">{phone[e]}</span>
              </>
            );
          } else {
            return (
              <>
                <span className="key">
                  {e
                    .replace("_", " ")
                    .toLowerCase()
                    .replace(/\b\w{3,}/g, function (l) {
                      return l.charAt(0).toUpperCase() + l.slice(1);
                    })}
                </span>
                <span className="value">{phone[e]}</span>
              </>
            );
          }
        }
      })}
    </div>
  );
}
