# Storybook to Strapi JSON Schema Conversion Prompt (Adjusted)

I have a Storybook component file in JavaScript, like this:

[PASTE STORYBOOK FILE HERE]

I want to automatically convert it into Strapi collection/component JSON schemas.

## Rules

1. Analyze the `args` of each exported story.
2. Any array field should become a **repeatable component** in Strapi.
3. Any object field inside an array or object should become a **nested component**.
4. String fields in the story should become `"type": "string"` in Strapi.
5. Media fields (like `icon` objects with `url`) should become `"type": "media"`, with `"allowedTypes": ["images"]` and `"multiple": false`.
6. The top-level exported component should become a Strapi component referencing the nested/repeatable components.
7. The **references in the top-level component should follow this format**:

```json
   "fieldName": {
     "type": "component",
     "repeatable": true,
     "component": "shared.[nested-component-name]"
   }
```

* Example: an array field `contacts` should reference `"shared.contact-contact"`.
* Example: an array field `requests` should reference `"shared.contact-request"`.

8. Only generate generic schemas—do not hardcode actual values like phone numbers or emails.

9. **Top-level component collection name format**:

```json
  "collectionName": "components_blocks_[component-name-plural-lowercase]",
  "info": {
    "displayName": "[Component Name in Title Case]"
  }
```

* Example: `ContactBlock` → `"components_blocks_contact_blocks"`

10. **Nested/repeatable component collection names should now be pluralized**:

```json
  "components_shared_contact_contacts"
  "components_shared_contact_requests"
```

11. Output JSON schemas for all components used (top-level + nested) in the format:

```json
{
  "collectionName": "...",
  "info": {
    "displayName": "..."
  },
  "options": {},
  "attributes": {
    ...
  }
}
```

Make sure the output matches the structure of the data in the Storybook, dynamically determining which fields are repeatable or nested, and follow the `shared.[component-name]` convention for nested components and do not forget to apply the plural name in collection name.