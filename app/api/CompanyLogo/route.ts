import AWS from 'aws-sdk';
import { NextRequest, NextResponse } from 'next/server';

AWS.config.update({
  accessKeyId: "AKIAQNUGTZA4CZYRA647",
  secretAccessKey: "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",
  region: 'eu-north-1',
});

const s3 = new AWS.S3();

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const params = {
    Bucket: 'capboard-company-logo',
    Key: file.name,
    Body: file,
  };

  try {
    const result = await s3.upload(params).promise();
    return NextResponse.json({ url: result.Location });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Error uploading file' }, { status: 500 });
  }
}