# Exporting Invoices

Invoicer supports multiple export formats for your invoices. This guide covers all available export options.

## PDF Export

PDF is the most common format for sending invoices to clients.

### Web Interface

1. Navigate to the invoice you want to export
2. Click the "Export PDF" button
3. The PDF will download automatically

### REST API

```bash
GET /api/invoices/{id}/pdf
```

**Example:**

```bash
curl -O http://localhost:8080/api/invoices/123/pdf
```

The PDF will be saved to your current directory.

### PDF Features

- High-quality rendering
- Print-ready format
- Includes all invoice details
- Professional layout
- Customizable templates

## JSON Export

Export invoice data as JSON for integration with other systems.

### REST API

```bash
GET /api/invoices/{id}
```

**Example:**

```bash
curl http://localhost:8080/api/invoices/123
```

**Response:**

```json
{
  "id": "123",
  "invoice_number": "INV-2024-001",
  "date": "2024-01-15",
  "due_date": "2024-02-15",
  "status": "paid",
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
      "tax_rate": 0.10,
      "total": 1375.00
    }
  ],
  "subtotal": 1250.00,
  "tax": 125.00,
  "total": 1375.00,
  "notes": "Payment due within 30 days",
  "created_at": "2024-01-15T10:30:00Z",
  "updated_at": "2024-01-20T14:15:00Z"
}
```

## CSV Export

Export a list of invoices as CSV for use in accounting software.

### REST API

```bash
GET /api/invoices/export/csv?start_date=2024-01-01&end_date=2024-12-31
```

**Query Parameters:**

- `start_date`: Start date for export (YYYY-MM-DD)
- `end_date`: End date for export (YYYY-MM-DD)
- `status`: Filter by status (optional)

**Example:**

```bash
curl "http://localhost:8080/api/invoices/export/csv?start_date=2024-01-01&end_date=2024-12-31" -o invoices.csv
```

**CSV Format:**

```csv
Invoice Number,Date,Due Date,Client,Status,Subtotal,Tax,Total
INV-2024-001,2024-01-15,2024-02-15,Acme Corporation,paid,1250.00,125.00,1375.00
INV-2024-002,2024-01-20,2024-02-20,XYZ Inc,sent,2000.00,200.00,2200.00
```

## Bulk Export

Export multiple invoices at once.

### REST API

```bash
POST /api/invoices/export
```

**Request Body:**

```json
{
  "format": "pdf",
  "invoice_ids": ["123", "124", "125"],
  "zip": true
}
```

This will create a ZIP file containing all requested invoices.

## Email Integration

While Invoicer doesn't send emails directly, you can integrate with email services:

1. Export PDF via API
2. Use your email service to send the PDF
3. Update invoice status via API

**Example Workflow:**

```bash
# Export PDF
curl -o invoice.pdf http://localhost:8080/api/invoices/123/pdf

# Send via email (using your email service)
# ... your email sending code ...

# Update status
curl -X PUT http://localhost:8080/api/invoices/123 \
  -H "Content-Type: application/json" \
  -d '{"status": "sent"}'
```

## Custom Export Formats

For custom export formats, use the JSON API and transform the data as needed:

```bash
# Get invoice data
curl http://localhost:8080/api/invoices/123 > invoice.json

# Transform using your preferred tool
# jq, Python, Node.js, etc.
```
