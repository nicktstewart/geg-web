import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function SupportPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-4">Support</h1>
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>
            Get in touch with our support team for assistance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            If you have any questions, issues, or inquiries about our games,
            please don&apos;t hesitate to contact our support team.
          </p>
          <p className="mb-4">
            You can reach us via email at{" "}
            <Link
              href="mailto:contact@guriieco.com"
              className="text-blue-500 hover:underline"
            >
              contact@guriieco.com
            </Link>
            . We strive to respond to all inquiries within 48 hours.
          </p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">
            Please provide as much detail as possible when contacting support to
            help us better understand and resolve your issue.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
