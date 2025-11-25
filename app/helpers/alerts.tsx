import { toast } from "sonner";
import { CircleCheckBig, CloudAlert } from "lucide-react";

export const toastSuccess = (message: string) => {
  toast.success(message, {
    duration: 4000,
    icon: <CircleCheckBig className="text-green-500" />,
  });
};

export const toastError = (message: string) => {
  toast.error(message, {
    duration: 4000,
    icon: <CloudAlert className="text-red-500" size={22} />,
    className: "flex items-center gap-3 bg-amber-500/10 border border-amber-500/30",
  });
};
