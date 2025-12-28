import { useState } from 'react';
import './Footer.css'

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <footer className='caption-sm'>
      <p className='developer underline'><a href="https://github.com/bee-yy"> Project By Blessing A</a></p>
      <p> &copy; <span className='current-year'>2025</span></p>
      <button className='open-modal-btn underline' onClick={openModal}>About PM Accelerator</button>

      {isOpen && (
        <dialog open>
          <h2>About PM Accelerator</h2>
          <p>
            PM Accelerator helps aspiring product managers with hands-on experience and industry knowledge.
          </p>
          <a
            href="https://www.linkedin.com/company/product-manager-accelerator/"
            target="_blank"
            rel="noreferrer"
          >
            Learn more on LinkedIn
          </a>
          <br />
          <button className='close-modal-btn' onClick={closeModal}>Close</button>
        </dialog>
      )}
    </footer>
  );
}

export default Footer;
