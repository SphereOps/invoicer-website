# Creating Invoices

Invoicer provides both a web interface and REST API for creating invoices. This guide covers both methods.

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

## REST API

Create invoices programmatically using the REST API.

### Create Invoice Endpoint

```bash
POST /api/invoices
```

### Request Body

```json
{
  "invoice_number": "INV-2024-001",
  "date": "2024-01-15",
  "due_date": "2024-02-15",
  "client": {
    "name": "Acme Corporation",
    "email": "billing@acme.com",
    "address": "123 Business St, City, State 12345",
    "phone": "+1-555-0123"
  },
  "items": [
    {
      "description": "Web Development Services",
      "quantity": 10,
      "unit_price": 125.00,
      "tax_rate": 0.10
    },
    {
      "description": "Consulting Hours",
      "quantity": 5,
      "unit_price": 150.00,
      "tax_rate": 0.10
    }
  ],
  "notes": "Payment due within 30 days. Thank you for your business!",
  "payment_terms": "Net 30"
}
```

### Example Request

```bash
curl -X POST http://localhost:8080/api/invoices \
  -H "Content-Type: application/json" \
  -d '{
    "invoice_number": "INV-2024-001",
    "date": "2024-01-15",
    "due_date": "2024-02-15",
    "client": {
      "name": "Acme Corporation",
      "email": "billing@acme.com",
      "address": "123 Business St, City, State 12345"
    },
    "items": [
      {
        "description": "Web Development Services",
        "quantity": 10,
        "unit_price": 125.00,
        "tax_rate": 0.10
      }
    ],
    "notes": "Payment due within 30 days"
  }'
```

### Response

```json
{
  "id": "123",
  "invoice_number": "INV-2024-001",
  "date": "2024-01-15",
  "due_date": "2024-02-15",
  "status": "draft",
  "subtotal": 1250.00,
  "tax": 125.00,
  "total": 1375.00,
  "created_at": "2024-01-15T10:30:00Z"
}
```

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
