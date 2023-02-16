import React from "react";

interface ProductPageProps {
    params: {
        id: string;
    }
}

export default function ProductPage({ params }: ProductPageProps) {
  const id = params.id;

  return <div>This is for Product {id}</div>;
}
