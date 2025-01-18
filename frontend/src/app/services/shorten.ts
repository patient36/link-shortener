import { useState } from "react";

interface ShortenResponse {
  url: {
    short: string;
    qrCode: string;
  };
}

const useShortenUrl = () => {
  const [form, setForm] = useState({ original: "", alias: "" });
  const [result, setResult] = useState<{
    shortUrl: string;
    qrCode: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState({
    copy: "Copy",
    download: "Download QR Code",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputFocus = (field: string) => {
    setForm((prev) => ({ ...prev, [field]: "" })); // Clear the input value
    setResult(null); // Reset the result
  };

  const handleShorten = async (): Promise<void> => {
    if (!form.original) {
      setError("Please provide a valid URL.");
      return;
    }

    setResult(null);
    setStatus({ copy: "Copy", download: "Download" });
    setError(null);

    try {
      const apiRoute = `${process.env.NEXT_PUBLIC_API}/shorten`;
      const response = await fetch(apiRoute as string, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message);
      } else {
        const data: ShortenResponse = await response.json();
        setResult({ shortUrl: data.url.short, qrCode: data.url.qrCode });
      }
    } catch (err) {
      setError("Something went wrong. Please try again!");
      console.error(err)
    }
  };

  return {
    form,
    result,
    error,
    status,
    setStatus,
    setResult,
    handleInputChange,
    handleInputFocus,
    handleShorten,
  };
};

export default useShortenUrl;
