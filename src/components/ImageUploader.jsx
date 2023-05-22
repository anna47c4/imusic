import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

function ImageUploader() {
  const supabaseUrl = "https://zqsbcscoefrwzvjdovik.supabase.co";
  const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpxc2Jjc2NvZWZyd3p2amRvdmlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDEwMDYwNSwiZXhwIjoxOTk5Njc2NjA1fQ.d0qpFDdFORgGH7EfIxRcmwGJrj54YfBsyaq7bDjxSkM";
  const supabase = createClient(supabaseUrl, supabaseKey);

  const vinyler = [
    { id: 1, billedeSti: "/produkt_img/1_lukasgraham.webp" },
    { id: 2, billedeSti: "/produkt_img/2_rammstein.webp" },
    { id: 3, billedeSti: "/produkt_img/3_metallica.webp" },
    { id: 4, billedeSti: "/produkt_img/4_thebeatles.webp" },
    { id: 5, billedeSti: "/produkt_img/5_edsheeran.webp" },
    { id: 6, billedeSti: "/produkt_img/6_depechemode.webp" },
    { id: 7, billedeSti: "/produkt_img/7_motorhead.webp" },
    { id: 8, billedeSti: "/produkt_img/8_kimlarsen.webp" },
    { id: 9, billedeSti: "/produkt_img/9_wham.webp" },
    { id: 10, billedeSti: "/produkt_img/10_bobdylan.webp" },
    { id: 11, billedeSti: "/produkt_img/11_svedbanken.webp" },
    { id: 13, billedeSti: "/produkt_img/13_johnnycash.webp" },
    {
      id: 14,
      billedeSti: "/produkt_img/14_allquietonthewestfront.webp",
    },
    { id: 15, billedeSti: "/produkt_img/15_strangerthings.webp" },
    { id: 16, billedeSti: "/produkt_img/16_mileycyrus.webp" },
    { id: 17, billedeSti: "/produkt_img/17_themindsof99.webp" },
    { id: 18, billedeSti: "/produkt_img/18_kennyrogers.webp" },
    { id: 19, billedeSti: "/produkt_img/19_pulpfiction.webp" },
    { id: 20, billedeSti: "/produkt_img/20_queenofthestoneage.webp" },
    { id: 21, billedeSti: "/produkt_img/21_greenday.webp" },
  ];

  useEffect(() => {
    uploadImagesToVinyler();
  }, []);

  async function uploadImagesToVinyler() {
    for (const vinyl of vinyler) {
      const { id, billedeSti } = vinyl;

      const response = await fetch(billedeSti);
      const fileData = await response.blob();
      const base64Data = await convertToBase64(fileData);

      const { data, error } = await supabase
        .from("vinyler")
        .update({ billeddata: { base64Data } })
        .eq("id", id);

      if (error) {
        console.error("Fejl ved upload af billede:", error);
      } else {
        console.log(`Billede uploadet for vinyl med id ${id}`);
      }
    }
  }

  function convertToBase64(data) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(data);
    });
  }
}

export default ImageUploader;
