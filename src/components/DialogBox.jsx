import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XIcon } from 'lucide-react'

function DialogBox({ isOpen, setIsOpen, handleDialogFunction, title, description, buttonText, buttonText2 }) {
    const handleCloseDialog = () => {
        handleDialogFunction();
        setIsOpen(false);
    }

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12 flex flex-col gap-2">
            <DialogTitle className="font-bold border-b border-gray-700 pb-4 text-base sm:text-lg md:text-xl text-black flex items-center justify-between">{title} <XIcon className="w-4 h-4 cursor-pointer" onClick={() => setIsOpen(false)} /></DialogTitle>
            <Description className="text-black text-sm sm:text-base md:text-md">{description}</Description>
            <div className="flex gap-4 justify-end">
              <button onClick={() => setIsOpen(false)} className="bg-primary text-white px-4 py-2 rounded-md">{buttonText2}</button>
              <button onClick={handleCloseDialog} className="bg-primary text-white px-4 py-2 rounded-md">{buttonText}</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}

export default DialogBox;