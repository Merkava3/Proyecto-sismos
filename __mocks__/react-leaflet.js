import React from 'react';

export const MapContainer = ({ children }) => <div data-testid="map-container">{children}</div>;
export const TileLayer = () => <div data-testid="tile-layer" />;
export const Marker = ({ children }) => <div data-testid="marker">{children}</div>;
export const Popup = ({ children }) => <div data-testid="popup">{children}</div>;
export const Polygon = () => <div />;
export const Circle = () => <div />;
export const useMap = () => ({ setView: jest.fn() });
export const useMapEvents = () => ({});
export const useMapEvent = () => ({});

export default {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polygon,
  Circle,
  useMap,
  useMapEvents,
  useMapEvent
};
