import { EmailOutlined, LocationOnOutlined, PhoneAndroidOutlined } from "@mui/icons-material";

export default function AddressInfo() {
  return (
    <div className="w-full flex items-center justify-center">
      <ul className="space-y-8">
        <li className="flex items-center">
          <EmailOutlined />
          <span className="text-lg font-medium">nathanielobeng0@gmail.com</span>
        </li>
        <li className="flex">
          <PhoneAndroidOutlined />
          <div className="">
            <span className="text-lg font-medium block">+233 (503894555) </span>
            <span className="text-lg font-medium">+233 (503894555) </span>
          </div>
        </li>
        <li className="flex items-center">
          <LocationOnOutlined />
          <span className="text-lg font-medium">Address</span>
        </li>
      </ul>
    </div>
  );
}
