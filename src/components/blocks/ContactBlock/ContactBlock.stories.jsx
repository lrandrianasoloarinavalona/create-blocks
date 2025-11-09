import ContactBlock from "./ContactBlock";

const meta = {
  component: ContactBlock,
};

export default meta;

export const Default = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [],
  },
};

export const WithOnlyOnePhoneNumber = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },

        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
      },
    ],
    requests: [],
  },
};

export const WithTwoCards = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [],
  },
};

export const WithOddCards = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [],
  },
};

export const WithEvenCards = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [],
  },
};

export const WithRequests = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Call us",
      },
    ],
  },
};

export const WithMultipleRequests = {
  args: {
    contacts: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Business operations",
        days: "Monday-Friday",
        hours: "06:00 - 19:00 (CET)",
        email: "support@email.com",
        phone1: "+123 456 7890",
        phone2: "+123 456 7891",
      },
    ],
    requests: [
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "VPN",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Security Breach",
      },
      {
        icon: {
          data: {
            attributes: {
              url: "https://cdn-icons-png.flaticon.com/512/1186/1186124.png",
            },
          },
        },
        title: "Basic Support",
      },
    ],
  },
};
