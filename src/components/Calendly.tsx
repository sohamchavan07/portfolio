import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface CalendlyProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Calendly = ({ open, onOpenChange }: CalendlyProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>Schedule a Call</DialogTitle>
        </DialogHeader>
        <div className="px-6 pb-6">
          {open && (
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/soham777chavan777/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Calendly;
