/**
 * DI constants
 * @author Robert Wacker
 *
 * @description Contains tokens for injection providers in the module,
 * controllers and services. Allows DI services to be used
 * through an interface for more flexibility.
 */

export const CACHE_SERVICE = Symbol('CACHE_SERVICE');
export const CACHE_CONFIG = Symbol('CACHE_CONFIG');
export const CACHE_DRIVER = Symbol('CACHE_DRIVER');
