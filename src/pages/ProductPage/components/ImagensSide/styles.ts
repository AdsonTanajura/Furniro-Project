import { styled } from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const ProductPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  height: 416px;
`;

export const ProductImagenPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 4px;
`;

export const ProductImagenContainer = styled.div`
  display: flex;
`;

export const ProductImagen = styled.img`
  width: 424px;
  height: 500px;
  border-radius: 4px;
`;
