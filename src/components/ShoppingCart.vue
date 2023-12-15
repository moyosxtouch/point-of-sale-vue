<script setup>
import { useCartStore } from "../stores/cart";
import ShoppingCartItem from "./ShoppingCartitem.vue";
import CouponForm from "./Coupon.vue";
import Amount from "./Amount.vue";
import { formatCurrency } from "../helpers";

import { useCouponStore } from "../stores/coupons";
const cart = useCartStore();
const coupon = useCouponStore();
</script>

<template>
  <p v-if="cart.isEmpty" class="text-xl text-center text-gray-900">
    El carrito esta vacio
  </p>
  <div v-else>
    <p class="text-4xl font-bold text-gray-900">Resumen de Venta</p>
    <ul role="list" class="mt-6 divide-y divide-gray-200">
      <ShoppingCartItem
        v-for="item in cart.items"
        :key="item.id"
        :item="item"
      />
    </ul>
    <dl
      class="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-gray-500"
    >
      <Amount>
        <template #label>Subtotal:</template>
        {{ formatCurrency(cart.subtotal) }}
      </Amount>
      <Amount>
        <template #label>Impuestos:</template>
        {{ formatCurrency(cart.taxes) }}
      </Amount>
      <Amount>
        <template #label>Descuento:</template>
        {{ formatCurrency(coupon.discount) }}
      </Amount>
      <Amount>
        <template #label>Total:</template>
        {{ formatCurrency(cart.total) }}
      </Amount>
    </dl>
    <CouponForm />
  </div>
</template>
