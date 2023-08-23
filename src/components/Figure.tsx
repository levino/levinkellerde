import React from 'react'
import Zoom from 'react-medium-image-zoom'
import Image, { Props } from '@theme/IdealImage'
export const Figure: React.FC<React.PropsWithChildren<{ caption: string }>> = ({
  children,
  caption,
}) => (
  <figure>
    {children}
    <FigureCaption>{caption}</FigureCaption>
  </figure>
)

export const FigureCaption: React.FC<
  React.PropsWithChildren<Record<string, unknown>>
> = ({ children }) => (
  <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
    {children}
  </figcaption>
)
export const ZoomableImage: React.FC<Props> = (props) => (
  <Zoom>
    <Image {...props} />
  </Zoom>
)
