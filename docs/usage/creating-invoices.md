# Creating Invoices

Invoicer provides a web interface for creating invoices. This guide covers how to create invoices using the web interface.

## Web Interface

### Step 1: Navigate to New Invoice

1. Open the Invoicer web interface at `http://localhost:8080`
2. Click the "New Invoice" button in the top navigation

### Step 2: Fill Invoice Details

Fill in the following information:

#### Client Information
- **Name**: Client or company name
- **Email**: Client email address
- **Address**: Full billing address
- **Phone**: Contact phone number (optional)

#### Invoice Information
- **Invoice Number**: Unique invoice identifier (e.g., INV-2024-001)
- **Date**: Invoice date
- **Due Date**: Payment due date
- **Payment Terms**: Terms of payment (e.g., "Net 30")

#### Line Items
Add one or more line items:
- **Description**: Item or service description
- **Quantity**: Number of units
- **Unit Price**: Price per unit
- **Tax Rate**: Tax percentage (optional)
- **Discount**: Discount amount or percentage (optional)

#### Additional Information
- **Notes**: Additional notes or terms
- **Footer Text**: Custom footer text

### Step 3: Preview and Save

1. Click "Preview" to see how the invoice will look
2. Make any necessary adjustments
3. Click "Save" to store the invoice
4. Optionally, click "Export PDF" to download a PDF version

## Invoice Status

Invoices can have the following statuses:

- **draft**: Invoice is being created, not yet sent
- **sent**: Invoice has been sent to the client
- **paid**: Invoice has been paid
- **overdue**: Invoice is past its due date and unpaid
- **cancelled**: Invoice has been cancelled

## Best Practices

1. **Use Consistent Numbering**: Establish a numbering scheme (e.g., INV-YYYY-###)
2. **Set Clear Due Dates**: Always specify payment terms and due dates
3. **Include Detailed Descriptions**: Make line items clear and specific
4. **Save Drafts**: Use draft status while creating complex invoices
5. **Review Before Sending**: Always preview invoices before marking as sent
