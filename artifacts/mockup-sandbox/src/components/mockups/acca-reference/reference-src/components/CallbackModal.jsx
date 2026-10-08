import { useEffect } from "react";

function CallbackModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="success-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="success-mark" aria-hidden="true">
          <span></span>
        </div>
        <span className="modal-kicker">THANK YOU</span>
        <h2 id="modal-title">Request Submitted Successfully!</h2>
        <p>Our team will contact you shortly.</p>
        <button className="button modal-close" type="button" onClick={onClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default CallbackModal;
