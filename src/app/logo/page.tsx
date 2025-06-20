import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Patient1st Logo - Available URLs',
  description: 'Access Patient1st logo for email linking and external use',
};

export default function LogoPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://patient1st.ai';
  
  const logoUrls = {
    api: `${baseUrl}/api/logo`,
    static: `${baseUrl}/image/patient1st-fleur.svg`,
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Patient1st Logo
          </h1>
          <p className="text-lg text-gray-600">
            Available URLs for email linking and external use
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex justify-center mb-8">
            <Image
              src="/image/patient1st-fleur.svg"
              alt="Patient1st Logo"
              width={128}
              height={128}
              className="h-32 w-auto"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Available Logo URLs
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    1. API Route (Recommended for emails)
                  </h3>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm text-blue-600 break-all">
                      {logoUrls.api}
                    </code>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This URL includes proper headers for email clients and cross-origin access.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    2. Static File
                  </h3>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm text-blue-600 break-all">
                      {logoUrls.static}
                    </code>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Direct access to the static file in the public directory.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Usage Examples
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">HTML Email</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm text-gray-800">
                      {`<img src="${logoUrls.api}" alt="Patient1st" style="height: 50px; width: auto;" />`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Markdown</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm text-gray-800">
                      {`![Patient1st](${logoUrls.api})`}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>✅ CORS enabled for cross-origin access</li>
                <li>✅ Proper cache headers for performance</li>
                <li>✅ SVG format for crisp display at any size</li>
                <li>✅ Optimized for email clients</li>
                <li>✅ Always accessible via direct URL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 